var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getAllPosts((err, posts) => {
    if (!err) res.json(posts)
  })
})

router.post('/', function (req, res) {
  const post = req.body.url
  db.addPost(post, (err, postUrl) => {
    res.json({message: 'post added successfully'})
  })
})

router.post('/:id', function (req, res) {
  const caption = req.body.caption
  const postId = Number(req.params.id)
  db.addCaption(postId, caption, (err, postCaption) => {
    res.json({message: 'caption added successfully'})
  })
})

// router.put('/:id', function (req, res) {
//   const like = req.body.like
//   const postId = Number(req.params.id)
// })

module.exports = router
