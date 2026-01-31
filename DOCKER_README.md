# Docker Setup for Dr. Baskaran Website

This document explains how to build and run the Dr. Baskaran website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The website will be available at `http://localhost:8080`

### Using Docker Commands

```bash
# Build the Docker image
docker build -t dr-baskaran-web .

# Run the container
docker run -d -p 8080:80 --name dr-baskaran-web dr-baskaran-web

# View logs
docker logs -f dr-baskaran-web

# Stop the container
docker stop dr-baskaran-web

# Remove the container
docker rm dr-baskaran-web
```

## Dockerfile Structure

The Dockerfile uses a multi-stage build:

1. **Builder Stage**: Uses Node.js to install dependencies and build the React application
2. **Production Stage**: Uses nginx to serve the static files

This approach results in a smaller final image (~25MB vs ~1GB).

## Configuration

### Port

The default port is 80 inside the container, mapped to 8080 on the host. To change the port:

**Docker Compose:**
```yaml
ports:
  - "3000:80"  # Change 3000 to your desired port
```

**Docker:**
```bash
docker run -d -p 3000:80 --name dr-baskaran-web dr-baskaran-web
```

### Environment Variables

The application runs in production mode by default. To customize:

**Docker Compose:**
```yaml
environment:
  - NODE_ENV=production
  - VITE_API_URL=https://api.example.com
```

**Docker:**
```bash
docker run -d -p 8080:80 \
  -e NODE_ENV=production \
  -e VITE_API_URL=https://api.example.com \
  --name dr-baskaran-web \
  dr-baskaran-web
```

## Nginx Configuration

The nginx configuration (`nginx.conf`) includes:

- Gzip compression for better performance
- Security headers
- Static asset caching (1 year)
- React Router support (SPA routing)
- Health check endpoint at `/health`

### Customizing Nginx

To customize nginx configuration:

1. Edit `nginx.conf`
2. Rebuild the Docker image:
   ```bash
   docker build -t dr-baskaran-web .
   ```

## Production Deployment

### Building for Production

```bash
# Build the image
docker build -t dr-baskaran-web:latest .

# Tag for registry (replace with your registry)
docker tag dr-baskaran-web:latest your-registry/dr-baskaran-web:latest

# Push to registry
docker push your-registry/dr-baskaran-web:latest
```

### Deployment Options

1. **Docker Hub**: Push to Docker Hub and pull on your server
2. **Private Registry**: Use AWS ECR, Google Container Registry, or Azure Container Registry
3. **Direct Build**: Build directly on your production server

### Example Production Deployment

```bash
# On your production server
docker pull your-registry/dr-baskaran-web:latest
docker run -d \
  -p 80:80 \
  -p 443:443 \
  --name dr-baskaran-web \
  --restart unless-stopped \
  your-registry/dr-baskaran-web:latest
```

## Health Checks

The container includes a health check endpoint at `/health`. You can verify the container is healthy:

```bash
# Check health status
docker inspect --format='{{.State.Health.Status}}' dr-baskaran-web

# Test health endpoint
curl http://localhost:8080/health
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs dr-baskaran-web

# Check if port is already in use
netstat -tulpn | grep 8080
```

### Build fails

```bash
# Clear Docker cache and rebuild
docker build --no-cache -t dr-baskaran-web .
```

### Permission issues

```bash
# Run with proper permissions
docker run -d -p 8080:80 --user root dr-baskaran-web
```

## Development with Docker

For development, you can mount the source code:

```bash
docker run -d -p 8080:80 \
  -v $(pwd)/src:/app/src \
  -v $(pwd)/public:/app/public \
  --name dr-baskaran-dev \
  dr-baskaran-web
```

However, for development, it's recommended to use `npm run dev` directly.

## Image Size Optimization

The multi-stage build already optimizes the image size. The final image is based on `nginx:alpine` which is very lightweight (~25MB).

## Security Considerations

- The nginx configuration includes security headers
- The container runs as a non-root user (nginx user)
- Only necessary files are included in the final image
- No development dependencies in production image

## Support

For issues or questions, please refer to the main README.md or contact the development team.

