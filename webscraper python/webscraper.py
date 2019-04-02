__author__ = 'JoseMedina'

from urllib.request import urlopen 
from bs4 import BeautifulSoup
import html5lib
 
html = urlopen("https://www.autobild.es/coches")

res = BeautifulSoup(html.read(),"html5lib");
#print(res)
#Se almacena toda la tabla de marcas+modelos+imagen+urlmodelos
marcasArr = []
for marca in res.findAll("figure", {"class": "logo"}):
	for m in marca.findAll("a", {"rel": "nofollow"}):
		marcaObject = {
		"nombre": m['title'],
		#"imagen": La tiene guardada en src no tiene la url.
		}
		marcasArr.append(marcaObject)
		
print(marcasArr)

