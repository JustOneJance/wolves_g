import express from 'express';

import nextApp from '../../nextInit';

const router = new express.Router();

router.route('/').get((req, res) => {
  return nextApp.render(req, res, '/Shop', req.query)
});

export default router; 