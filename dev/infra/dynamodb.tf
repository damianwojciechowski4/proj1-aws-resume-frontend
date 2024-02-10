terraform {
   required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "eu-central-1"
}

resource "aws_dynamodb_table" "visitors-counter-table" {
  name           = "visitors-counter-table"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "counterName"
 

  attribute {
    name = "counterName"
    type = "S"
  }
  tags={
    environment = "dev"
  }
}


resource "aws_dynamodb_table_item" "example_item"{
  table_name=aws_dynamodb_table.visitors-counter-table.name
  hash_key = aws_dynamodb_table.visitors-counter-table.hash_key

  item= <<ITEM
  {
    "counterName":{"S" : "visitors"},
    "count":{"N":"0"}  
  }
  ITEM
}

