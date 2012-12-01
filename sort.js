var myObject =  {
		length : 0,
		reverseSortArray : [],
		straightSortArray : [],
		array : [],
		getLength : function () {
			this.length = prompt("Введите длину массива", '');
		},
		getArray : function () {
			alert("Введите " + myObject.length + " элемент(а)(ов): ");
			for (var i = 0; i < this.length; i++) {
				this.array[i] = prompt("Введите " + (i + 1) + "-й элемент ", "")  
			}
		},
		initializationSortArrays : function () {
			for (var i = 0; i < this.length; i++) {
				this.reverseSortArray[i] = this.array[i];
				this.straightSortArray[i] = this.array[i];
			}
		},
		swap : function (array, iPos, jPos) {
			var temp = array[iPos];
			array[iPos] = array[jPos];
			array[jPos] = temp;
		},
		sort : function (type) {
			switch (type) {
				case "Straight" :
					for (var i = 0; i < myObject.length - 1; i++) {
						for (var j = i + 1; j < myObject.length; j++) {
							if (this.straightSortArray[i] > this.straightSortArray[j]) {
								this.swap(this.straightSortArray, i, j);
							}
						}
					}
					break;
				case "Reverse" :
					for (var i = 0; i < myObject.length - 1; i++ ) {
						for (var j = i + 1; j < myObject.length; j++) {
							if (this.reverseSortArray[i] < this.reverseSortArray[j]) {
								this.swap(this.reverseSortArray, i, j);
							}
						}
					}
					break;
			}
		}
	}
	myObject.getLength();
	myObject.getArray();
	myObject.initializationSortArrays();
	myObject.sort("Reverse");
	myObject.sort("Straight");
	alert("Входной массив :" + myObject.array + ". Массив, отсортированный в обратном порядке :" + myObject.reverseSortArray + ". Массив, отсортированный в прямом порядке :" + myObject.straightSortArray);