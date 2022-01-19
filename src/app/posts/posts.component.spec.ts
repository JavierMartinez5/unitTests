import { EMPTY, of, throwError } from "rxjs"
import { PostsComponent } from "./posts.component"
import { PostsService } from "./posts.service"

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })

  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY
    })

    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })

  it('should update posts after ngOnInit', () => {
    const posts = [{title: 'fick'}, {title: 'hello'}, {title: 'lalala'}]

    spyOn(service, 'fetch').and.returnValue(of(posts))

    component.ngOnInit()
    expect(component.posts).toBe(posts)
  })

  it('should add new post', () => {
    const post = {title: 'suck'}

    const spy = spyOn(service, 'create').and.returnValue(of(post))
    component.add(post.title)

    expect(spy).toHaveBeenCalled()
    expect(component.posts.includes(post)).toBeTruthy()
  })

  it('should asign error msg to error variable', () => {
    const errorMsg = 'some error'

    spyOn(service, 'create').and.returnValue(throwError(errorMsg))
    component.add('some text')

    expect(component.message).toBe(errorMsg)
  })

  it('should remove post if user confirm', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
    spyOn(window, 'confirm').and.returnValue(true)

    component.delete(5)

    expect(spy).toHaveBeenCalledWith(5)
  })

  it('should NOT remove post if user doesn`t confirm', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
    spyOn(window, 'confirm').and.returnValue(false)

    component.delete(5)

    expect(spy).not.toHaveBeenCalled()
  })
})
