<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShopItem;

class ShopItemController extends Controller
{

    public function index()
    {
        $items = ShopItem::all();
        return response()->json($items);
    }

    public function show($id)
    {
        $item = ShopItem::find($id);
        return response()->json($item);
    }
    

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
        ]);

        $item = ShopItem::create([
            'name' => $request->name,
            'description' => $request->description,
            'stock' => $request->stock,
            'price' => $request->price,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Item created successfully',
            'data' => $item
        ]);
    }

    public function update(Request $request, $id)   
    {
        // Validate incoming request
        $request->validate([
            'name' => 'required',
            'price' => 'required',
        ]);
    
        $item = ShopItem::find($id);
    
        if (!$item) {
            return response()->json(['success' => false, 'message' => 'Item not found'], 404);
        }        
    
        // Log the request data to see what's being received
        \Log::info('Updating item with data:', $request->all());
    
        $item->update([
            'name' => $request->name,
            'description' => $request->description,
            'stock' => $request->stock,
            'price' => $request->price,
        ]);
    
        return response()->json([
            'success' => true,
            'message' => 'Item updated successfully',
            'data' => $item
        ]);
    }
    
    
    public function delete($id)
    {
        $item = ShopItem::find($id);
        if (!$item) {
              return response()->json(['success' => false, 'message' => 'Item not found'], 404);
            }

        $item->delete();

        return response()->json([
            'success' => true,
            'message' => 'Item deleted successfully',
            'data' => $item
        ]);
    }
}
