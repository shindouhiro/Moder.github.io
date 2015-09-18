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


React.render(<App />,document.getElementById('app'));