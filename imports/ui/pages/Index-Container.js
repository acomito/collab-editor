import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import Index from './Index.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents');
  if (subscription.ready()) {
    const thisDocument = Documents.findOne({_id: 'sr8YSjKnYtzPCLzpr'});
    onData(null, { thisDocument });
  }
};

export default composeWithTracker(composer, Loading)(Index);
