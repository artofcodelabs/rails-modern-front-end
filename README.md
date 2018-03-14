# 🧐 What's this?

This repository was created as a _"code-along"_ while I was reading blog posts about modern front-end in Rails available on [Evil Martians' blog](https://evilmartians.com/chronicles).

Each blog post is in the separate commit, so you can look at incremental changes.

On top of that - I fixed some bugs and introduced my own changes to reduce an unnecessary code and to create even bigger separation between the front-end and the back-end.

[Commits](https://github.com/artofcodelabs/rails-modern-front-end/commits/master) in a chronological order:

1. **Initial commit**

2. [**🐑 Evil Front Part 1: Modern Front-end in Rails**](https://evilmartians.com/chronicles/evil-front-part-1)

3. [**👾 Evil Front Part 2: Modern Front-end in Rails**](https://evilmartians.com/chronicles/evil-front-part-2)

4. [**🛸 Evil Front Part 3: Modern Front-end in Rails**](https://evilmartians.com/chronicles/evil-front-part-3)

5. **Bug fixes and improvements**

6. **loco.js** - [Loco framework](http://locoframework.org) has been added to simplify communication between the front-end and the back-end. It looks like there are more additions than deletions, though, but that's because of the fact that `current_user` is now persisted in the database. _Loco-Rails_ requires an authenticated model to work with a full functionality. So the app is kind of closer to a production version. However, the part of code that is responsible for a front-end ↔ back-end communication looks way simpler now.

7. **From webpacker to webpack** - I strongly believe in a separation of concerns and that a front-end code should be handled by front-end tools. I don't like _gemified_ wrappers of front-end libraries. And I feel the same about [webpacker](https://github.com/rails/webpacker). Why not to use [webpack](https://webpack.js.org) directly instead? This is what I did. To have it working I had to restore _Sprockets_ back. It is kind of a trade off. But it is fair to me. I just use it at the last stage to _move_ assets from `app/assets` to `public/assets` and to `gzip` them.

# ⚙️ Initialization

Standard Rails stuff:

```bash
bundle
bin/rails db:create
bin/rails db:migrate
```

Plus installation of front-end dependencies:

```bash
npm install
```

# 🎮 Usage

For development - just run Rails server and `webpack` with development configuration in separate terminal tabs:

```bash
bin/rails s
```

```bash
npm run start
```

For production - just generate a production version of assets first and follow-up with a standard Rails procedure. 

```bash
npm run build
bin/rails assets:precompile
```

# 📜 License

[MIT License](https://opensource.org/licenses/MIT)

# 👨‍🏭 Author

Zbigniew Humeniuk from [Art of Code](http://artofcode.co)