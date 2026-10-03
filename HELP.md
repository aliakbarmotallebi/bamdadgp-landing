# BamdadGP Web — Deploy & Runner CLI

Repo: `https://github.com/aliakbarmotallebi/bamdadgp-landing.git`  
Runner host: `server3` (self-hosted Linux x64)  
Persistent env (outside runner workspace): `/opt/www/bamdadgp-landing/.env`

---

## 1) Install GitHub Actions runner (server)

```bash
mkdir -p /opt/actions-runner && cd /opt/actions-runner

curl -o actions-runner-linux-x64-2.337.0.tar.gz -L \
  https://github.com/actions/runner/releases/download/v2.337.0/actions-runner-linux-x64-2.337.0.tar.gz

tar xzf ./actions-runner-linux-x64-2.337.0.tar.gz
```

Create a non-root user and give Docker access:

```bash
useradd -m -s /bin/bash runner || true
usermod -aG docker runner
chown -R runner:runner /opt/actions-runner
```

Get a registration token from GitHub:

**Repo → Settings → Actions → Runners → New self-hosted runner → Linux / x64**

Then:

```bash
su - runner
cd /opt/actions-runner

./config.sh \
  --url https://github.com/aliakbarmotallebi/bamdadgp-landing \
  --token PASTE_TOKEN_HERE \
  --name server3 \
  --labels bamdadgp \
  --work _work \
  --unattended
```

Install as a systemd service (as root):

```bash
cd /opt/actions-runner
./svc.sh install runner
./svc.sh start
./svc.sh status
```

Checks:

```bash
docker --version
docker compose version
groups runner
```

GitHub → **Settings → Actions → Runners** should show `server3` as **Idle**.

---

## 2) One-time: persistent `.env` on the server

Runner workspace (`_work/...`) is cleaned every job. Keep secrets **outside** it.

Stop the old stack if needed (frees ports 80/443):

```bash
cd /opt/www/bamdadgp-landing
docker compose down || true
docker ps --format '{{.Names}}\t{{.Ports}}' | grep -E '80|443' || true
```

Create the persistent env file once:

```bash
mkdir -p /opt/www/bamdadgp-landing
nano /opt/www/bamdadgp-landing/.env
chown runner:runner /opt/www/bamdadgp-landing/.env
chmod 600 /opt/www/bamdadgp-landing/.env
```

Minimum keys (see also `.env.docker.example`) — mock site, no API vars:

```env
APP_HOST=www.bamdadgp.com
APP_HOST_ALT=bamdadgp.com
ACME_EMAIL=info@bamdadgp.com
```

DNS for `bamdadgp.com` and `www.bamdadgp.com` must point to this server. Port **80** must be open for Let's Encrypt HTTP challenge.

---

## 3) How deploy works (no rsync)

On every push to `main`, the self-hosted runner:

1. checks out the repo into its workspace  
2. copies `/opt/www/bamdadgp-landing/.env` → `.env` in that workspace  
3. runs `docker compose up -d --build` **in the workspace**

The persistent `.env` is never deleted or overwritten by git/checkout.

Manual re-run: GitHub → **Actions → Deploy → Run workflow**.

---

## 4) Push from local

```bash
cd /Users/aliakbarmotallebi/Desktop/Projects/bamdadgp-web

git add .
git commit -m "Your message"
git push origin main
```

---

## 5) Useful server commands

Logs (container names from compose):

```bash
docker compose -f /opt/actions-runner/_work/bamdadgp-landing/bamdadgp-landing/docker-compose.yml ps
# easier: find running containers
docker ps --filter name=bamdadgp
docker logs -f --tail=200 bamdadgp-web
docker logs -f --tail=200 bamdadgp-traefik
```

Edit env anytime (then re-run the workflow or compose again):

```bash
nano /opt/www/bamdadgp-landing/.env
```

---

## Notes

- Traefik has **no dashboard subdomain**; it only terminates SSL for `APP_HOST` / `APP_HOST_ALT`.
- Old Strapi (`api.bamdadgp.com`) is not part of this stack.
- Never commit `.env`. Only `/opt/www/bamdadgp-landing/.env` is the source of truth on the server.
