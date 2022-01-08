## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 挙動確認

#### 登録

curl -XPOST -H "Content-Type:application/json" localhost:3000/users -d '{"name":"ユーザー太郎"}'

`{"message":"アカウントの登録に成功しました"}`

curl -XPOST -H "Content-Type:application/json" localhost:3000/users -d '{"name":"ユーザー二郎"}'

`{"message":"アカウントの登録に成功しました"}`

#### 一覧

curl -H "Content-Type:application/json" localhost:3000/users

`[{"name":"ユーザー太郎","id":1},{"name":"ユーザー郎","id":2}]`

#### 詳細

curl -H "Content-Type:application/json" localhost:3000/users/1

`{"name":"ユーザー太郎","id":1}`

#### 更新

curl -XPATCH -H "Content-Type:application/json" localhost:3000/users/2 -d '{"name":"更新二郎"}'

`{"message":"アカウント ID「2」の更新に成功しました。"}`

curl -H "Content-Type:application/json" localhost:3000/users

`[{"name":"ユーザー太郎","id":1},{"name":"更新二郎","id":2}]`

#### 削除

curl -XDELETE -H "Content-Type:application/json" localhost:3000/users/2

`{"message":"アカウント ID「2」の削除に成功しました。"}`

curl -H "Content-Type:application/json" localhost:3000/users

`[{"name":"ユーザー太郎","id":1}]`

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
