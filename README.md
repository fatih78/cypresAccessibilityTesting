# cypressdemo:
    * docker-compose up --exit-code-from cypress
    * docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:3.2.0
       
# or - call the yml file
    * docker-compose up -d
    * npx cypress run
    * docker-compose down
    
# Jenkins stop, start en restart from /Users/fatihtopcuoglu/.jenkins/war
brew services stop jenkins-lts
brew services start jenkins-lts
brew services restart jenkins-lts

from commandline:
/Users/fatihtopcuoglu
use command ./ngrok http 8080
and copy-paste url in github > repositpry > settings > Webhooks > Payload url as "https://dfc2f53e215b.ngrok.io/github-webhook/"




