# Node Version Management

This project uses a specific Node.js version defined in the `.nvmrc` file.

## Installation

First, you'll need to install a Node Version Manager for your operating system:

### Mac Users
You can install NVM using:

1. **Homebrew**:
   ```bash
   brew install nvm
   ```

2. **cURL or Wget**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   # OR
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

### Linux Users
Install using cURL or Wget as shown above for Mac users.

### Windows Users
Download and install from the [nvm-windows releases page](https://github.com/coreybutler/nvm-windows/releases).

## Using the Correct Node.js Version

After installing NVM and cloning the repository:

### Mac/Linux Users

```bash
# Switch to the correct Node.js version
nvm use
```

This will automatically read the version from the `.nvmrc` file.

### Windows Users

Windows users need to use [nvm-windows](https://github.com/coreybutler/nvm-windows), which does not support the `.nvmrc` file directly.

1. Check the Node.js version in the `.nvmrc` file
2. Install the required version (if not already installed):
   ```bash
   nvm install <version-from-nvmrc>
   ```
3. Manually switch to that version:
   ```bash
   nvm use <version-from-nvmrc>
   ```

For example, if the `.nvmrc` file contains `22.1.0`:
```bash
nvm install 22.1.0
nvm use 22.1.0
```

## Troubleshooting

- **Mac/Linux**: If you're having issues with NVM, please visit the [NVM GitHub page](https://github.com/nvm-sh/nvm) for troubleshooting.
- **Windows**: If you're having issues with nvm-windows, please visit the [nvm-windows GitHub page](https://github.com/coreybutler/nvm-windows) for troubleshooting.
