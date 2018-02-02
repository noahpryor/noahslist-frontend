import Page from '../components/page'
import ComedianList from "../components/ComedianList"
import Error from 'next/error'

import {getComedians} from '../db/comedians'
export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    const comedians = await getComedians()
    return { comedians }
  }

  render() {
    if (!this.props.comedians) {
      return <Page><Error statusCode="404" /></Page>
    }

    return <Page><ComedianList comedians={this.props.comedians} /></Page>
  }
}
