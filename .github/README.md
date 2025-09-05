# GitHub Workflows

This repository includes automated workflows for continuous integration and publishing.

## Workflows

### 1. CI Workflow (`ci.yml`)

**Triggers:**
- Push to `main` branch  
- Pull requests to `main` branch

**Actions:**
- Installs dependencies
- Builds the project
- Runs tests (if any)
- Verifies package contents
- Checks build outputs

### 2. Publish Workflow (`publish.yml`)

**Triggers:**
- GitHub releases (automatic)
- Manual trigger with version bump

**Actions:**
- Builds the project
- Publishes to npm
- Creates git tags (manual trigger only)

## Setup Requirements

### 1. NPM Token

Add your npm authentication token to GitHub Secrets:

1. Go to your npm account → Access Tokens
2. Create a new **Automation** token
3. Copy the token
4. In your GitHub repo: Settings → Secrets → Actions
5. Add new secret: `NPM_TOKEN` with your token value

### 2. GitHub Token

The `GITHUB_TOKEN` is automatically provided by GitHub Actions.

## Usage

### Automatic Publishing (Recommended)

1. Create a new release on GitHub:
   ```bash
   gh release create v1.0.1 --title "Release v1.0.1" --notes "Bug fixes and improvements"
   ```

2. The workflow automatically publishes to npm

### Manual Publishing

1. Go to Actions tab in GitHub
2. Select "Publish to NPM" workflow  
3. Click "Run workflow"
4. Choose version bump (patch/minor/major)
5. The workflow will:
   - Bump version in package.json
   - Publish to npm
   - Create and push git tag

## Version Management

- **patch**: Bug fixes (1.0.0 → 1.0.1)
- **minor**: New features (1.0.0 → 1.1.0)  
- **major**: Breaking changes (1.0.0 → 2.0.0)

## Troubleshooting

### Failed NPM Publish

1. Check that `NPM_TOKEN` secret is set correctly
2. Ensure token has publish permissions
3. Verify package name is available on npm

### Failed Build

1. Check that all dependencies are in `package.json`
2. Ensure build scripts work locally
3. Review build logs in Actions tab