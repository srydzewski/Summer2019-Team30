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

import React from 'react';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';

/**
 * A message card.
 * @return The html representation of the card.
 */
const styles = function() {
  return {
    card: {
      maxWidth: 400,
      margin: 24
    },
    media: {
      height: 0,
      paddingTop: '75%'
    }
  };
};
const style = function() {
  return {
    card: {
      // flexDirection: 'row',
      height: undefined,
      width: undefined,
      // alignSelf: 'center',
      marginBottom: 3,
      marginTop: 3,
      borderRadius: 3
    },
    cardItem: {
      borderLeftWidth: 5,
      borderLeftColor: '#ea7e7a'
    }
  };
};

 MessagesCard = function(props) {
  return (
    <div className='Message message-div'>
      <CardActionArea>
        <div className='message-header'>
          <CardHeader title={props.user} subheader={props.timestamp} />
        </div>
        <CardContent>
          <CardMedia>
            {<div dangerouslySetInnerHTML={{ __html: props.text }} />}
          </CardMedia>
        </CardContent>
      </CardActionArea>
    </div>
  );
};
const ImageCard = function(props) {
  return (
    <div>
      <CardActionArea>
        <ButtonBase
          className={props.classes.cardAction}
          onClick={event => {MessagesCard}
          }>
          <CardContent>
            <CardMedia>
              {<div dangerouslySetInnerHTML={{ __html: props.text }} />}
            </CardMedia>
          </CardContent>
        </ButtonBase>
      </CardActionArea>
    </div>
  );
};

const Message = function(props) {
  return (
    <div className='Message message-div'>
      <div className='message-header'>
        {props.user + ' - ' + new Date(props.timestamp)}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  );
};
class CardUI extends React.Component{
  render() {
    return {
      <div>
    < ImageCard />
    <MessagesCard />
    </div>
    }
  }
}
Message.propTypes = {
  /** Name of the user posting the message. */
  user: PropTypes.string,
  /** The timestamp of the message. */
  timestamp: PropTypes.number,
  /** The content of the message. */
  text: PropTypes.string
};
export default CardUI;
