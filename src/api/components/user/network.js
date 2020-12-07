import express from 'express';

import controller from './controller';
import response from '../../../network/response';
import auth from '../auth/controller';
import secure from './secure';

const router = express.Router();

const list = (req, res, next) => {
  controller
    .list()
    .then((users) => {
      response.success(req, res, users, 200, 'All users Ok');
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .get(req.params.id)
    .then((users) => {
      response.success(req, res, users, 200, 'User Ok');
    })
    .catch(next);
};

const insert = (req, res, next) => {
  controller
    .insert(req.body)
    .then((user) => {
      response.success(req, res, user, 200, 'User Register Ok');
    })
    .catch(next);

  auth
    .insert(req.body)
    .then((authData) => {
      response.success(req, res, authData, 200, 'Auth Register Ok');
    })
    .catch(next);
};

const update = (req, res, next) => {
  controller
    .update(req.body, req.body.id)
    .then((user) => {
      response.success(
        req,
        res,
        { AffectedRows: `${user} rows` },
        200,
        'User Update Ok',
      );
    })
    .catch(next);

  auth
    .update(req.body, req.body.id)
    .then((authData) => {
      response.success(req, res, authData, 200, 'User Update Ok');
    })
    .catch(next);
};

const remove = (req, res, next) => {
  controller
    .remove(req.params.id)
    .then((result) => {
      response.success(
        req,
        res,
        {
          userDelete: `${result} user delete with id=${req.params.id} `,
        },
        200,
      );
    })
    .catch(next);

  auth
    .remove(req.params.id)
    .then((result) => {
      response.success(
        req,
        res,
        {
          userDelete: `${result} userAuth delete with id=${req.params.id} `,
        },
        200,
      );
    })
    .catch(next);
};

router.get('/', list);
router.get('/:id', get);
router.post('/signup', insert);
router.put('/', secure('update'), update);
router.delete('/:id', secure('remove'), remove);

export default router;
