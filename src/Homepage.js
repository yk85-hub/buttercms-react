import React from 'react'
import butter from './butter-client'
import { Helmet } from 'react-helmet'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default class extends React.Component {
  state = {
    data: {
      fields: {
        customer_logos: [] 
      }
    }
  }
  async componentDidMount () {
    const { match } = this.props
    const resp = await butter.page.retrieve('*', 'homepage')
    this.setState(resp.data)
  }
  render () {
    const { fields } = this.state.data

    return (
      <div>
        <Helmet>
          <title>{fields.seo_title}</title>
          <meta property='og:title' content={fields.facebook_open_graph_title} />
        </Helmet>
        <h1>{fields.headline}</h1>
        <img src={fields.hero_image} />
        <button>{fields.call_to_action}</button>
        <h3>Customers Love Us!</h3>
      
      
    
      
      
      <Typography className={classes.root}>
  <Link href="#" onClick={preventDefault}>
    Link
  </Link>
  <Link href="#" onClick={preventDefault} color="inherit">
    {'color="inherit"'}
  </Link>
  <Link href="#" onClick={preventDefault} variant="body2">
    {'variant="body2"'}
  </Link>
</Typography>
 
      
  
      
      
      
      
      
      
      
      
      
  
      
        <ul>
          {fields.customer_logos.map((logo) => {
            return (
              <li>
                <img src={logo.logo_image} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  
  
  
  
  
  
  
}




