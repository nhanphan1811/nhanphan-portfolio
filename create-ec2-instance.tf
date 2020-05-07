# variable "ami" {}
# variable "image-flavor" {}
# # variable "key-pair" {}
# variable "aws-region" {}
# variable "tag-name" {}
# variable "tag-cpaccount" {}
variable "aws_ssh_admin_key_file" { }

provider "aws" {
  region = "eu-west-1"
}

resource "aws_security_group" "dep-ec2" {
  name = "deployment-ec2"
  description = "Allow incoming ssh and http connection on port 80 from anywhere, and any outgoing connection to anywhere"
  ingress {
      from_port = 22
      to_port = 22
      protocol = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
      from_port = 80
      to_port = 80
      protocol = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "ec2-master" {
  ami = var.ami
  instance_type = var.image-flavor
  key_name = aws_key_pair.admin_key.key_name
  vpc_security_group_ids = [aws_security_group.dep-ec2.id]
  associate_public_ip_address = true

  tags {
    Name = "${var.tag-name}-ec2-master-${timestamp()}"
    # "C+Account" = "${var.tag-cpaccount}"
  }
}



