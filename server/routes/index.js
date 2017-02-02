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
  db.addPost(post, (err, post) => {
    res.status(201).json(post)
  })
})

router.post('/:id', function (req, res) {
  const caption = req.body.caption
  const postId = Number(req.params.id)
  db.addCaption(postId, caption, (err, postCaption) => {
    res.json({message: 'caption added successfully'})
  })
})

router.put('/:postId/:captionId', function (req, res) {
  const captionId = Number(req.params.captionId)
  const postId = Number(req.params.postId)
  db.updateLike(postId, captionId, (err, postLike) => {
    res.json({likes: postLike, message: 'like updated successfully'})
  })
})

module.exports = router
