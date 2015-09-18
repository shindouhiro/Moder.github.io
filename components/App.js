var React = require('react');
var Header = require('./Header.js');
var Action = require('./Action.js');
var HaoDuo = require('./HaoDuo.js');
var Books = require('./Books.js');
var Footer = require('./Footer.js');
var App = React.createClass({

	render: function(){
		return(
          <div>
          	<Header />
          	<Action />
          	<HaoDuo />
          	<Books />
          	<Footer />
          </div>
		)
	}
})


module.exports = App;