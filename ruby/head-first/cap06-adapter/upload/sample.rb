require_relative 'upload'

Upload.adapter= :aws
Upload.send_file('test.txt')

Upload.adapter= :azure
Upload.send_file('test.txt')

Upload.adapter= :google
Upload.send_file('test.txt')

Upload.adapter= :own
Upload.send_file('test.txt')
