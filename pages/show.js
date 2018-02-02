import Page from '../components/page'
export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    return { id }
  }

  render() {
    return <Page>Show: {this.props.id}</Page>
  }
}
