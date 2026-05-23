# Multi-stage build for React/Vite application

# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
# Use npm install instead of npm ci to tolerate lockfile drift
# (project is primarily managed with bun; package-lock.json may be out of sync)
RUN npm install --no-audit --no-fund --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image with nginx
FROM nginx:alpine AS production

# Install wget for health checks
RUN apk add --no-cache wget

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage (Vite already includes public files in dist)
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check - using the health endpoint
# Note: Some platforms handle health checks externally, so this can be removed if needed
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --spider --quiet http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

