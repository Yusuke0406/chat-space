# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

##group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user


##groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|
|name|string|index:true,null:false,unique:true|
### Association
- has_many :users, through: :group_users
- has_many :messages
- has_many :group_users


##userテーブル
|Column|Type|Option|
|------|----|------|
|id|integer|
|name|string|index:true.null:false,unique:true|
|email|string|index:true,null:false,unique:true|
### Association
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users


##messageテーブル
|Column|Type|Option|
|------|----|------|
|id|integer|
|body|text|
|image|string|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
