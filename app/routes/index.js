import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Erica Seen",
  question: "What do people use to make the fist programming language?",
}, {
  id: 2,
  author: "Govenor Mombasa",
  question: "How old is a 4 year dog in human years?",
}, {
  id: 3,
  author: "Red May",
  question: "Why do i love staring at fish?",
  type: "Apartment",
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
