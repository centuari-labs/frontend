# Step 1: Install dependencies and build the app
FROM node:18-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Install dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN pnpm build

# Step 2: Run the app using a smaller image
FROM node:18-alpine AS runner

# Install pnpm (optional, only needed if using `pnpm` directly at runtime)
RUN npm install -g pnpm

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start"]
