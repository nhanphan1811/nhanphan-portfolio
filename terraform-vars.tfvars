variable "ami" {
  default = "ami-785db401"
}
variable "image-flavor" {
  default = "t2.micro"
}
variable "tag-name" {
  default = "dep-ec2-tag"
}
variable "key-pair" {
  default = "keys/aws_terraforms"
}