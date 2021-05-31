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
      steps {
        sh 'npm run integration-test'
      } 
    }
    stage('e2e-tests') {
      steps {
        sh './e2e-test.sh' 
      } 
    }
  }
}
