<?php

namespace App\Http\Controllers;

use App\Models\BannerPosition;
use Inertia\Inertia;
use App\Models\Banner;
use App\Models\Heading;
use App\Models\Item;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Http\Request;

class RuleLibraryController extends Controller
{
    public function index()
    {
        $slide = Banner::where('position_code', 'SLIDE_SHOW')->orderBy('order_index')->where('status', 'active')->get();
        $newBooks = Item::where('category_code', 'NEW_BOOKS')->where('status', 'active')->with('images')->limit(12)->get();
        $researchPaper = Item::where('category_code', 'RESEARCH_PAPERS')->where('status', 'active')->with('images')->limit(12)->get();
        $heroSection = Page::where('code', 'HOME_PAGE')->where('status', 'active')->with('images')->first();
        $newPost = Post::with('images')
            ->where('status', 'active')
            ->limit(6)
            ->get();
        $videos = Item::where('category_code', 'VIDEOS')->where('status', 'active')->with('images')->get();
        // return $videos;
        return Inertia::render('rule-library/Index', [
            'slide' => $slide,
            'newBooks' => $newBooks,
            'researchPaper' => $researchPaper,
            'heroSection' => $heroSection,
            'newPost' => $newPost,
            'videos' => $videos,
        ]);
    }

    public function videos(Request $request)
    {
        // $videos = Item::where('category_code', 'VIDEOS')->where('status', 'active')->with('images')->get();
        $search = $request->input('search', '');
        $query = Item::query()->where('category_code', 'VIDEOS')->with('images');

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('name_kh', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->where('status', 'active')->paginate(40)->withQueryString();
        // return $tableData;
        return Inertia::render('rule-library/videos/Index', [
            'tableData' => $tableData,
            'filters' => [
                'search' => $search
            ]
        ]);
    }
 public function introduction()
    {
        $heroSection = Page::where('code', 'HOME_PAGE')->where('status', 'active')->with('images')->first();
        // return $videos;
        return Inertia::render('rule-library/Introduction', [
            'heroSection' => $heroSection,
        ]);
    }
    
    public function about()
    {
        $banner = BannerPosition::where('code', 'ABOUT_PAGE_BANNER')->first();
        $aboutPage = Page::where('code', 'ABOUT_PAGE')->where('status', 'active')->with('images')->get();
        // $ourValues = Page::where('code', 'OUR_VALUES')->where('status', 'active')->with(['children.images'])->get();

        $ourValues = Page::where('code', 'OUR_VALUES')
            ->with([
                'images',
                'children' => fn($sub_query) => $sub_query->orderBy('order_index')->where('status', 'active')->with('images'),
            ])
            ->get();
        //  return $ourValues;
        return Inertia::render('rule-library/About', [
            'banner' => $banner,
            'aboutPage' => $aboutPage,
            'ourValues' => $ourValues,
        ]);
    }
    public function collections()
    {
        $banner = BannerPosition::where('code', 'COLLECTION_PAGE_BANNER')->first();
        $query = Item::query();
        $query->where('category_code', 'COLLECTIONS');
        $query->orderBy('id', 'desc');
        $query->where('status', 'active');
        $query->with('images');
        $tableData = $query->paginate(40);

        $heading = Heading::where('code', 'COLLECTIONS')->first();
        return Inertia::render('rule-library/collections/Index', [
            'banner' => $banner,
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }
    public function resources()
    {
        $banner = BannerPosition::where('code', 'RESOURCES_PAGE_BANNER')->first();
        $query = Item::query();
        $query->where('category_code', 'RESOURCES');
        $query->orderBy('id', 'desc');
        $query->where('status', 'active');
        $query->with('images');
        $tableData = $query->paginate(40);

        $heading = Heading::where('code', 'RESOURCES')->first();
        return Inertia::render('rule-library/resources/Index', [
            'banner' => $banner,
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }
    public function databases()
    {
        $banner = BannerPosition::where('code', 'DATABASES_PAGE_BANNER')->first();
        $query = Item::query();
        $query->where('category_code', 'DATABASES');
        $query->orderBy('id', 'desc');
        $query->where('status', 'active');
        $query->with('images');
        $tableData = $query->paginate(40);

        $heading = Heading::where('code', 'DATABASES')->first();

        return Inertia::render('rule-library/databases/Index', [
            'banner' => $banner,
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }

    public function news(Request $request)
    {
        $search = $request->input('search', '');

        $query = Post::query()->with('images');

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->where('status', 'active')->paginate(40)->withQueryString();

        return Inertia::render('rule-library/news/Index', [
            'tableData' => $tableData,
            'filters' => [
                'search' => $search
            ]
        ]);
    }

    public function new_books(Request $request)
    {
        $search = $request->input('search', '');

        $query = Item::where('category_code', 'NEW_BOOKS')->with('images');

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('name_kh', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->where('status', 'active')->paginate(40)->withQueryString();

        return Inertia::render('rule-library/newBook/Index', [
            'tableData' => $tableData,
            'filters' => [
                'search' => $search
            ]
        ]);
    }

    public function detail($id)
    {
        $showData = Item::findOrFail($id);
        $relatedPosts = Item::with('category', 'images')
            ->where('id', '!=', $id)
            ->where('category_code', $showData->category_code) // match category_code
            ->where('status', 'active')
            ->orderBy('id', 'desc')
            ->limit(6)
            ->get();
        return Inertia::render('rule-library/Detail', [
            'showData' => $showData->load('images', 'category'),
            'relatedPosts' => $relatedPosts,
        ]);
    }

    public function contact()
    {
        return Inertia::render('rule-library/Contact');
    }
    public function news_show($id)
    {
        $itemShow = Post::with('images')->find($id);
        $bannerInDetail = Banner::where('position_code', 'BANNER_IN_VIEW_DETAIL')->orderBy('order_index')->where('status', 'active')->get();
        // $itemShow = Post::with('images')
        // ->where('status', 'active')
        // ->get();
        //  return  $itemShow;
        return Inertia::render('rule-library/news/Show', [
            'id' => $id,
            'bannerInDetail' => $bannerInDetail,
            'itemShow' => $itemShow,
        ]);
    }
    // public function collection_show($id)
    // {
    //     $itemShow = Post::with('images')->find($id);
    //     $bannerInDetail = Banner::where('position_code', 'BANNER_IN_VIEW_DETAIL')->orderBy('order_index')->where('status', 'active')->get();
    //     // $itemShow = Post::with('images')
    //     // ->where('status', 'active')
    //     // ->get();
    //     //  return  $itemShow;
    //     return Inertia::render('rule-library/Detail', [
    //         'id' => $id,
    //         'bannerInDetail' => $bannerInDetail,
    //         'itemShow' => $itemShow,
    //     ]);
    // }
}
