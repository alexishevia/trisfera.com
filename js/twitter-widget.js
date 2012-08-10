new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 4,
  interval: 6000,
  width: 'auto',
  height: 125,
  theme: {
	shell: {
	  background: '#1C5C94',
	  color: '#ffffff'
	},
	tweets: {
	  background: '#ffffff',
	  color: '#333',
	  links: '#4F8B9F'
	}
  },
  features: {
	scrollbar: false,
	loop: true,
	live: true,
	hashtags: true,
	timestamp: true,
	avatars: true,
	toptweets: true,
	behavior: 'default'
  }
}).render().setUser('trisfera').start();

