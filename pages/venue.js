import Page from '../components/page'
export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    return { id }
  }

  render() {
    return <Page>{this.props.id}</Page>
  }
}
