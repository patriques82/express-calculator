pipeline {
  agent none
  stages {
    stages('build') {
      steps {
        npm install
      } 
    }
    stages('unit-tests') {
      steps {
        npm run unit-test
      } 
    }
    stages('integration-tests') {
      steps {
        npm run integration-test
      } 
    }
    stages('e2e-tests') {
      steps {
        sh './e2e-test.sh' 
      } 
    }
  }
}
