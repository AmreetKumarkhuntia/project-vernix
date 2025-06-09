echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;32m  🎉 Bundling Package... 🚀\033[0m"
npm run build

echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;37m  🎨 Copying CSS files...\033[0m"
mkdir css
cp ./src/css/* ./css  # Copy CSS directory with all its content

echo -e "\033[1;34m##############################\033[0m"
echo -e "\033[1;32m  ✅ Publish Directory Ready!\033[0m"

npm run package:lint

# Check for the --publish flag
if [ "$1" == "--publish" ]
then
    echo -e "\033[1;34m##############################\033[0m"
    echo -e "\033[1;35m  🚀 Publishing Package to npm... 🛠️\033[0m"
    npm publish
else
    echo -e "\033[1;34m##############################\033[0m"
    echo -e "\033[1;33m  Skipping npm publish. Use the 'build:publish' script to publish.\033[0m"
fi
