# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.209.6/containers/debian/.devcontainer/base.Dockerfile
# [Choice] Debian version (use bullseye or stretch on local arm64/Apple Silicon): bullseye, buster, stretch
# ARG VARIANT="bullseye"
# FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}


# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.209.6/containers/javascript-node/.devcontainer/base.Dockerfile
# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Save vscode extensions through container rebuilds
# ARG USERNAME=vscode
ARG USERNAME=node
RUN mkdir -p \
    /home/$USERNAME/.vscode-server/extensions \
    /home/$USERNAME/.vscode-server-insiders/extensions \
    && chown -R $USERNAME \
    /home/$USERNAME/.vscode-server \
    /home/$USERNAME/.vscode-server-insiders

# Copy the entire project
# COPY . /workspaces/nodejs-container/
COPY --chown=$USERNAME . /workspaces/nodejs-container/

# Install nodejs
# RUN apt-get -y update \
#     && apt-get -y install nodejs

# Install Git
# RUN apt-get -y update \
#     && apt-get -y install git

# Switch from USER=root (default)
# USER node

# Initialize a Git Repository
# RUN git init /workspaces/nodejs-container/
# RUN su node -c "git init /workspaces/nodejs-container/"
# RUN git add -A
# RUN git commit -m "Initial commit"

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
