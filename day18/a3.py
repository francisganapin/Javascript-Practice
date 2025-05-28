role = 'editor'

if role == 'admin':
    print('Welcome admin! full access granted.')
elif role == 'editor':
    print('Welcome editor! limited access granted.')
else:
    print('Access denied')