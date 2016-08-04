
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
driver = webdriver.Firefox()

driver.get("https://192.168.10.111")
assert "Firewall Authentication" in driver.title

user = driver.find_element_by_name("username")
passwd = driver.find_element_by_name("password")

user.send_keys("***")
passwd.send_keys("***")

passwd.send_keys(Keys.RETURN)
driver.close()
