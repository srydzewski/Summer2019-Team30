/**
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import background_icon from 'statics/images/food_icon.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Message from 'components/ui/Message.js';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import { SEARCH_SERVLET } from 'constants/links.js';
import Button from '@material-ui/core/Button';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const styles = function() {
  return {
    root: {
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${background_icon})`
    },
    paper: {
      marginTop: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '30%',
      width: '75%',
      marginLeft: '20%',
      marginRight: '20%',
      backgroundColor: grey[50]
    },
    avatar: {
      margin: 24,
      fontSize: 40
    },
    form: {
      width: '90%',
      marginTop: 24,
      marginLeft: 30,
      marginRight: 30
    },
    submit: {
      margin: 1,
      marginTop: 6
    },
    inputRoot: {
      width: '100%',
      borderStyle: 'solid',
      borderColor: blue[300]
    },
    inputInput: {
      padding: '10px',
      width: '100%'
    }
  };
};

/** User-Entered Value */
var searchVal = null;
/** Search url */
const url = SEARCH_SERVLET + '?query=' + searchVal;
/** Promises */
const promises = Promise.all([fetch(url)]);

const submitSearch = function() {
  fetch(SEARCH_SERVLET, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: 'search=' + searchVal
  });
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }

  componentDidMount() {
    promises
      .then(results => Promise.all(results.map(r => r.clone().json())))
      .then(results => {
        const [content] = results;
        this.setState({ content });
      });
  }

  handleOnChange = event => {
    searchVal = event.target.value;
  };

  updateData(data) {
    this.setState({ data });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography className={classes.avatar} component='h1' variant='h5'>
            Tip of My Tongue
          </Typography>
          <form action={SEARCH_SERVLET} method='POST' id='searchIn'>
            <textarea name='search' className={classes.form} noValidate />
            <input
              type='submit'
              value='Search'
              onChange={event => {
                searchVal = document.getElementById('searchIn', event).value;
                console.log(searchVal);
              }}
            />
          </form>
          <Button
            onClick={submitSearch}
            className={classes.submit}
            variant='contained'
            color='primary'>
            Search
          </Button>
        </div>
      </Grid>
    );
  }
}

Home.propTypes = {
  /** Required by material-io. */
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
