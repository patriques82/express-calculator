pipeline {
  agent none
  stages {
    stage('build') {
      steps {
        npm install
      } 
    }
    stage('unit-tests') {
      steps {
        npm run unit-test
      } 
    }
    stage('integration-tests') {
      steps {
        npm run integration-test
      } 
    }
    stage('e2e-tests') {
      steps {
        sh './e2e-test.sh' 
      } 
    }
  }
}
