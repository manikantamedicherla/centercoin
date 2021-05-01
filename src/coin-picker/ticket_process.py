def getListOfFiles(dirName):
    # create a list of file and sub directories 
    # names in the given directory 
    listOfFile = os.listdir(dirName)
    allFiles = list()
    # Iterate over all the entries
    for entry in listOfFile:
        # Create full path
        fullPath = os.path.join(dirName, entry)
        # If entry is a directory then get the list of files in this directory 
        if os.path.isdir(fullPath):
            allFiles = allFiles + getListOfFiles(fullPath)
        else:
            allFiles.append(fullPath)
                
    return allFiles
# Get the list of all files in directory tree at given path

import cv2
pdf_img_dir = '/home/manikanta/Pictures/csvs/tambola/'
ticket_dir = '/home/manikanta/Pictures/csvs/tambola_tickets/'
ticket_f_dir = '/home/manikanta/Pictures/csvs/tambola_f_tickets/'

def crop_tickets_from_img(img_path, save_to_dir = './'):
    ref = 'https://stackoverflow.com/questions/15589517/how-to-crop-an-image-in-opencv-using-python'
    root_x = 825
    root_y = 280
    diff = 810
    # ticket_positions_in_img = [(825, 280),(825, 1090), (825,1900), (825, 2710)]
    ticket_positions_in_img = [(root_x, root_y + (diff*0)),(root_x, root_y +( diff*1)), (root_x, root_y + (diff*2) ), (root_x, root_y + (diff*3))]
    for index, item in enumerate(ticket_positions_in_img):
        # img_path = '/home/manikanta/Pictures/csvs/tambola/0001.jpg'
        file_name_arr = img_path.split('/')[-1].split('.')
        file_name = '_'.join(file_name_arr[0:-1])
        file_extension = file_name_arr[-1]
        img = cv2.imread(img_path)
        x = item[0]
        y = item[1]
        w = 1378
        h = 532
        crop_img = img[y:y+h, x:x+w]
        crop_img_file_name = save_to_dir + file_name + str(index + 1) + '.' + file_extension
        cv2.imwrite(crop_img_file_name, crop_img)

def fill_label(img_path, save_to_dir = './'):
    ref = 'https://stackoverflow.com/questions/23720875/how-to-draw-a-rectangle-around-a-region-of-interest-in-python'
    file_name_arr = img_path.split('/')[-1].split('.')
    file_name = '_'.join(file_name_arr[0:-1])
    file_extension = file_name_arr[-1]
    img = cv2.imread(img_path)
    x1 = 420
    y1 = 0
    x2 = 1196
    y2 = 104
    y2 = 110
    cv2.rectangle(img, (x1, y1), (x2, y2), (255, 255, 255), -1)
    cvr_img_file_name = save_to_dir + file_name  + '.' + file_extension
    cv2.imwrite(cvr_img_file_name, img)
listOfFiles = getListOfFiles(pdf_img_dir)
for img_path in listOfFiles:
    '''
        crop combined to individual tckts
    '''
    save_to_dir = ticket_dir
    crop_tickets_from_img(img_path, save_to_dir)


listOfFiles = getListOfFiles(ticket_dir)
for img_path in listOfFiles:
    '''
        coverls the label with white rect box
    '''
    save_to_dir = ticket_f_dir
    fill_label(img_path, save_to_dir)
