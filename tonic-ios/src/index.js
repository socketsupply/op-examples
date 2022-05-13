const Tonic = require('@socketsupply/tonic')
class AppContainer extends Tonic {
  async click (e) {
    const anchor = Tonic.match(e.target, 'a')

    if (anchor) {
      window.external.invoke(`ipc://external?href=${encodeURIComponent(anchor.href)}`)
      e.stopPropagation()
      return
    }
  }
  render () {
    return this.html`
      <img src="images/nav-logo.svg">
      <h3>Read more about Operator Framework for iOS at <a href="https://operatorframework.dev/ios">https://operatorframework.dev/ios</a></h3>
    `
  }
}

window.onload = async () => {
  // init the main component
  Tonic.add(AppContainer)
}

