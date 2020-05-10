resource "aws_key_pair" "default" {
  key_name   = "cluster-key-pair"
  public_key = file("${var.key_path}")
}

resource "aws_instance" "master" {
  ami                    = join("", data.aws_ami.default.*.image_id)
  instance_type          = var.instance_type
  key_name               = aws_key_pair.default.id
  user_data              = file("${var.bootstrap_path}")
  vpc_security_group_ids = [aws_security_group.default.id]
  subnet_id              = aws_subnet.default.id

  # The connection block tells our provisioner how to communicate with the resource (instance)
  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("${var.private-key}")
    host        = self.public_ip
  }

  provisioner "remote-exec" {
    # The connection will use the local SSH agent for authentication
    inline = [
      "echo Successfully connected",
      "sleep 50",
      "sudo apt-add-repository ppa:ansible/ansible -y",
      "sudo apt-get update -y",
      "sudo apt-get install ansible -y",
      "echo ansible installed...",
      "echo --------------------------------------------",
      "sleep 50",
      "export ANSIBLE_HOST_KEY_CHECKING=False",
      "ansible-playbook -u ubuntu --private-key ${var.private-key} -i ansible/hosts ansible/playbook.yml"
    ]
  }

  # provisioner "local-exec" {
  #   command = "sleep 50"
  # }

  # # provisioner "local-exec" {
  # #   command = "export ANSIBLE_HOST_KEY_CHECKING=False"
  # # }

  # provisioner "local-exec" {
  #   command = "ansible-playbook -u ubuntu --private-key ${var.private-key} -i ansible/hosts ansible/playbook.yml"
  # }

  tags = {
    Name = "master"
  }
}

resource "aws_instance" "worker1" {
  ami                    = join("", data.aws_ami.default.*.image_id)
  instance_type          = var.instance_type
  key_name               = aws_key_pair.default.id
  user_data              = file("${var.bootstrap_path}")
  vpc_security_group_ids = [aws_security_group.default.id]
  subnet_id              = aws_subnet.default.id

  tags = {
    Name = "worker 1"
  }
}

resource "aws_instance" "worker2" {
  ami                    = join("", data.aws_ami.default.*.image_id)
  instance_type          = var.instance_type
  key_name               = aws_key_pair.default.id
  user_data              = file("${var.bootstrap_path}")
  vpc_security_group_ids = [aws_security_group.default.id]
  subnet_id              = aws_subnet.default.id

  tags = {
    Name = "worker 2"
  }
}
