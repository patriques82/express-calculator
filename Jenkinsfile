pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      } 
    }
    stage('unit-tests') {
      steps {
        sh 'npm run unit-test'
      } 
    }
    stage('integration-tests') {
      when {
        anyOf {
          branch 'develop'
          branch 'main'
        }
      }
      steps {
        sh 'npm run integration-test'
      } 
    }
    stage('e2e-tests') {
      when {
        branch 'main'
      }
      steps {
        sh './e2e-test.sh' 
      } 
    }
    stage('deliver-image') {
      when {
        branch 'main'
      }
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            def image = docker.build("patriques82/express-calculator")
            image.push("$BUILD_ID")
          }
        }
      } 
    }
    stage('deploy-to-heroku') {
      when {
        branch 'main'
      }
      environment {
        HEROKU_API_KEY=credentials('heroku_token')
      }
      steps {
        sh 'heroku container:push web --app=radiant-island-91815'
        sh 'heroku container:release web --app=radiant-island-91815'
      }
    }
  }
}
