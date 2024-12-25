echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;32m  🎉 Bundling Package... 🚀\033[0m"
npm run build

echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;33m  🛠️ Creating Publish Directory...\033[0m"
mkdir -p ./npm-publish  # Creating the publish directory if it doesn't already exist

# Copy files with style! ✨
echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;36m  📦 Copying dist to publish folder...\033[0m"
cp -r ./dist/* ./npm-publish/

echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;35m  📜 Copying README.md...\033[0m"
cp ./README.md ./npm-publish/

echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;31m  📦 Copying package.json...\033[0m"
cp ./package.json ./npm-publish/

echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;37m  🎨 Copying CSS files...\033[0m"
cd npm-publish
mkdir -p css
cd ../
cp ./src/css/* ./npm-publish/css  # Copy CSS directory with all its content

echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;32m  ✅ Publish Directory Ready!\033[0m"

# Echo for Publishing the Package
echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;35m  🚀 Publishing Package to npm... 🛠️\033[0m"
cd npm-publish
npm publish
