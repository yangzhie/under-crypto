# UnderCrypto
UnderCrypto is a cryptocurrency exchange with a user-friendly GUI. It is an SPA built using ReactJS + Vite. Using multiple APIs to fetch cryptocurrency data, it displays various statistics of any cryptocurrency. It has a functional homepage, coin page (which displays the statistics about the coin along with news) and a watchlist page, where you can view what coins you have added to be tracked.

Due to the limitations of the a public API, the search bar is limited to searching a specific coin. However, by viewing [this particular](https://api.coinranking.com/v2/coins) JSON formatted page, you can obtain the uuid of any coin and enter it into UnderCrypto's addess bar in the format of '/coin/{uuid}' and the corresponding cryptocurrency's page should be available.

**Live Project:** [View my live project!]()

### :page_with_curl: Technologies used
- HTML, CSS, JavaScript
- NodeJS, ReactJS
- Coinranking API, Kraken API, CoinStats API

### :black_nib: Approach
I started the project off by planning first choosing something I had interest in building and aligned with an
public API - this kept me to push through and finish alot of features in in little time. I had first planned on
doing something related to stocks, but there was no good public stocks API available and I then found cryptocurrency, which I has essentially the same amount of interest in.

I then began my planning. This consisted of making drawings about each page's UI/UX design, which was surprisingly hard and took me one whole day to plan two pages. This included creating the wireframes of the two pages, making a Trello board about what I want to include in these pages, and researching multiple React libraries to accomodate to my page's needs. Framer Motion, Lottie, Type Animation, MUI and ChartJS piqued my interest.

I then began working on each page's general layout in CSS, nothing too fancy but just some visualization to see where everything will go. After this initial wireframe came time to work on the fetching, storing and using the data gotten from multiple APIs and displaying it on the page. Then time had come to start on the React animations from different libraries and incorporating them into my landing page.

At this time, I was very ahead of time before the project's deadline, so I decided to incorporate one more page that was left in my planning, a sort of a stretch goal - the wishlist page. Because I had only "planned" this out on paper as a drawing, I had to do everything from scratch - linking the API fetches to this page, CSS general layout, etc. By the end, I had completed everything I had hoped for in my given timeframe - then came CSS styling last.

### :telescope: Screenshots
#### Wireframes
![Wireframe One]()
![Wireframe Two]()
![Wireframe Three]()

#### Trello Board
![Trello Board]()

#### Project Screenshots
![Landing Page]()
![Coin Page]()
![Watchlist Page]()

### :pencil: Lessons Learnt
- Planning before a project is essential to save time and brain power. Everything may not go according to plan, but it's all part of the experience.
- Recieving feedback on what you are doing is sometimes eye-opening. Whether it's constructive feedback or not, it helps to see things (in this case, the project) from a fresh set of eyes.
- Needless to say, learnt a lot of React libraries in order to build this project.

### :hammer: Challenges
- Although I honed my CSS skills along the way, it really tested me with so many CSS files in a project, I had to get better at my naming conventions and keeping track of what files are using what CSS styles so as to not overlap and mess up a layout.
- Some challenges were also presented by some APIs mid-project - from limited data, to slow fetch calls, to exceeding rate limits.
- Naturally, I came across the occasional bug or two every now and then in my code, whether it's due to a tiny syntax error or just not knowing how to tackle a problem. Researching and asking questions when these problems arised helped me solve them and learn from them.

### :bulb: Future Features
- Make available the option to add multiple custom watchlists
- Make the watchlist page more responsive
- Currency/coin conversion should be displayed in its section as the user types in a number
- Make a backend to link it and enable a sign up and login feature