# BamdadGP Web — Deploy & Runner CLI

Repo: `https://github.com/aliakbarmotallebi/bamdadgp-landing.git`  
Server deploy path: `/opt/www/bamdadgp-landing`  
Runner host: `server3` (self-hosted Linux x64)

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

## 2) One-time server prep before first deploy

Stop the old landing stack if it is still running (frees ports 80/443):

```bash
cd /opt/www/bamdadgp-landing
docker compose down || true

# if an older external Traefik still owns 80/443:
docker ps --format '{{.Names}}\t{{.Ports}}' | grep -E '80|443' || true
```

Create deploy dir + `.env` (never commit this file):

```bash
mkdir -p /opt/www/bamdadgp-landing
cp /path/to/.env.docker.example /opt/www/bamdadgp-landing/.env
nano /opt/www/bamdadgp-landing/.env
```

Minimum keys:

```env
APP_HOST=www.bamdadgp.com
APP_HOST_ALT=bamdadgp.com
ACME_EMAIL=info@bamdadgp.com
NEXT_PUBLIC_BASE_URL=
API_BASE_URL=
SELLER_URL=
```

Give the runner user write access:

```bash
chown -R runner:runner /opt/www/bamdadgp-landing
```

DNS for `bamdadgp.com` and `www.bamdadgp.com` must point to this server. Port **80** must be open for Let's Encrypt HTTP challenge.

---

## 3) Push this project to the old GitHub repo (local)

From the `bamdadgp-web` project root:

```bash
cd /Users/aliakbarmotallebi/Desktop/Projects/bamdadgp-web

git init
git add .
git commit -m "Replace landing stack with bamdadgp-web (Next.js + Traefik SSL)"

git branch -M main
git remote add origin https://github.com/aliakbarmotallebi/bamdadgp-landing.git
# if remote already exists:
# git remote set-url origin https://github.com/aliakbarmotallebi/bamdadgp-landing.git

# Replaces previous landing history/files on main
git push -u origin main --force
```

After push, workflow `.github/workflows/deploy.yml` runs on the **self-hosted** runner and:

1. checks out the repo  
2. rsyncs into `/opt/www/bamdadgp-landing` (keeps existing `.env`)  
3. runs `docker compose up -d --build`

Manual re-run: GitHub → **Actions → Deploy → Run workflow**.

---

## 4) Useful server commands after deploy

```bash
cd /opt/www/bamdadgp-landing
docker compose ps
docker compose logs -f --tail=200 web
docker compose logs -f --tail=200 traefik
```

Rebuild manually:

```bash
cd /opt/www/bamdadgp-landing
docker compose up -d --build --remove-orphans
```

---

## Notes

- Traefik has **no dashboard subdomain**; it only terminates SSL for `APP_HOST` / `APP_HOST_ALT`.
- Old Strapi (`api.bamdadgp.com`) is not part of this stack.
- `.env` stays only on the server; workflow never overwrites it.
