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
    stage('push-image') {
      when {
        branch 'main'
      }
      docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
        def image = docker.build("patriques82/express-calculator:${env.BUILD_ID}")
        image.push()
      }
    }
  }
}
