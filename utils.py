import cv2 as cv

img = cv.imread("profile.jpg")
height, width = img.shape[:2]
img = cv.resize(img, (width//10, height//10))
height, width = img.shape[:2]
print(height, width)
while True:
    print("Query: ")
    raw = input()
    query = raw.split()
    y_start, x_start, w = int(query[0]), int(query[1]), int(query[2])
    assert (y_start>=0 and 
            y_start+w <= height and
            x_start>=0 and
            x_start+w <= width and
            w > 0)
    test_img = img[y_start:y_start+w, x_start:x_start+w]
    print(test_img.shape)
    cv.imshow(raw, test_img)
    cv.waitKey(0)
    cv.destroyAllWindows()
    print("done?")
    if input() == 'y':
        print(query)
        break

# new_img = cv.resize(test_img, (32, 32))
cv.imwrite('favicon.png', test_img)


# cv.imwrite("favicon.ico", )