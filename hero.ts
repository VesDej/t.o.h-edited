export class Hero {
  id: number;
  name: string;
  surname: string;
  position: string;
  photos: any[];
  private photosUrl = 'window.URL.createObjectURL(this.files[0])';

  constructor(private http: Http) { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos() {
    this.http.get(this.photosUrl)
      .map(data => data.json())
      .subscribe(data => {
        this.photos = data;
      });
  }
}
