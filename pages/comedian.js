import Page from '../components/page'
import {getComedian} from '../db/comedians'
import Error from 'next/error'

export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    const comedian = await getComedian(id)
    return { id, comedian }
  }

  render() {
    if (!this.props.comedian) {
      return <Error statusCode="404" />
    }

    return <Page>
      <h1>{this.props.comedian.name}</h1>
      <img src={this.props.comedian.imageUrl} />

    </Page>
  }
}
