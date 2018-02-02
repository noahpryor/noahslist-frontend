import Page from '../components/page'
import {getCellarShowTimesForDate} from '../db/cellar'
import {getStandupNyShowTimesForDate} from '../db/stubsites'
import Error from 'next/error'

export default class extends React.Component {

  static async getInitialProps ({ req, query: { year, month, day } }) {
    console.log(year)
    const date = `${year}-${month}-${day}`
    const [cellarShowtimes, standupnyShowtimes] = await Promise.all([
      getCellarShowTimesForDate(date),
      getStandupNyShowTimesForDate(date)
    ])
    return { cellarShowtimes, standupnyShowtimes }
  }

  render() {
    if (!this.props.cellarShowtimes) {
      return <Error statusCode="404" />
    }

    return <Page>
      <div>
        <h1>cellar</h1>
        <p>
          {JSON.stringify(this.props.cellarShowtimes)}
        </p>
      </div>
      <div>
        <h1>standupny</h1>
        <p>
          {JSON.stringify(this.props.standupnyShowtimes)}
        </p>
      </div>

    </Page>
  }
}
